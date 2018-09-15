import App, { Container } from "next/app";
import React from "react";

import ServiceWorker from "../helpers/ServiceWorker";

export default class MyApp extends App {

    /**
     * Bypass getInitialProps to each page
     * so they can handle their own implementation
     */
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps }: any = this.props;

        return (
            <Container>
                <Component {...pageProps} />
                <ServiceWorker />
            </Container>
        );
    }
}
