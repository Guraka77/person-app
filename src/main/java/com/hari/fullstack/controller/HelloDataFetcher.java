package com.hari.fullstack.controller;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;

@DgsComponent
public class HelloDataFetcher {
    @DgsQuery
    public String hello() {
        return "Hello, world!";
    }
}
