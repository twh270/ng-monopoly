package org.byteworks.monopoly;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class MonopolyApplication {

    public MonopolyApplication() {

    }

    public static void main(final String[] args) {
        final ApplicationContext ctx;
        ctx = SpringApplication.run(MonopolyApplication.class, args);

        System.out.println("Let's inspect the beans provided by Spring Boot:");

        final String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (final String beanName : beanNames) {
            System.out.println(beanName);
        }

    }

}