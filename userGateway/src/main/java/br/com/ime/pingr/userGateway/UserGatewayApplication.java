package br.com.ime.pingr.userGateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@SpringBootApplication
public class UserGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserGatewayApplication.class, args);
	}

}
