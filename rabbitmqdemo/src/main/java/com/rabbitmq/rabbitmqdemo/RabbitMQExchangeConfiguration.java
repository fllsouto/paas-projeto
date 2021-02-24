package com.rabbitmq.rabbitmqdemo;

import org.springframework.amqp.core.Exchange;
import org.springframework.amqp.core.ExchangeBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQExchangeConfiguration {
	
	private static final String NEW_LIKE_EXCHANGE = "NewLikeExchange";
	private static final String NEW_NOTIFICATION_EXCHANGE = "NewNotificationExchange";
	private static final String USER_UPDATE_EXCHANGE = "UserUpdateExchange";
	private static final String USER_REMOVED_EXCHANGE = "UserRemovedExchange";

	@Bean
	public Exchange userRemoveExchange() {
		return ExchangeBuilder.topicExchange(USER_REMOVED_EXCHANGE).build();
	}
	
	@Bean
	public Exchange userUpdateExchange() {
		return ExchangeBuilder.topicExchange(USER_UPDATE_EXCHANGE).build();
	}
	
	@Bean
	public Exchange newNotificationExchange() {
		return ExchangeBuilder.topicExchange(NEW_NOTIFICATION_EXCHANGE).build();
	}
	
	@Bean
	public Exchange newLikeExchange() {
		return ExchangeBuilder.topicExchange(NEW_LIKE_EXCHANGE).build();
	}
}
