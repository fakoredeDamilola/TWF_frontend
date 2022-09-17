import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from "@apollo/client"
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from "./store/store"
import theme from "./theme";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from "@apollo/client/utilities";


const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql',
  connectionParams: {
    authToken: localStorage.getItem("authToken"),
  },

}));


const authLink = setContext((_,{headers}) => {
    const token = localStorage.getItem("authToken");

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
})


const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );
const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: splitLink,
    cache: new InMemoryCache()
})

const AppProvider = ({ children }: { children:JSX.Element }) => {
    return  (
        <ApolloProvider client ={client}>
            {/* <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}> */}
                <Provider store={store}>
                    <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            
                {children}
            </ChakraProvider>
            </Provider>
            {/* </GoogleOAuthProvider> */}
        </ApolloProvider>
            
    )
}

export default AppProvider;