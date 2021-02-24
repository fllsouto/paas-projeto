package br.com.ime.pingr.notificationGateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@SpringBootApplication
public class NotificationGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificationGatewayApplication.class, args);
	}

}
