package com.rabbitmq.rabbitmqdemo;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQBindingConfiguration {
	
	private static final String USER_REMOVE_BINDING_KEY = "user_removed";
	private static final String USER_UPDATE_BINDING_KEY = "user_updated";
	private static final String NEW_LIKE_BINDING_KEY = "new_like";
	private static final String NEW_NOTIFICATION_BINDING_KEY = "new_notification";

	@Autowired
	private RabbitMQQueueConfiguration queue;
	@Autowired
	private RabbitMQExchangeConfiguration exchange;
	
	@Bean
	public Binding userRemovedBinding() {
		return BindingBuilder
		.bind(queue.userRemoveQueue())
		.to(exchange.userRemoveExchange())
		.with(USER_REMOVE_BINDING_KEY)
		.noargs();
	}
	
	@Bean
	public Binding userUpdatedBinding() {
		return BindingBuilder
		.bind(queue.userUpdateQueue())
		.to(exchange.userUpdateExchange())
		.with(USER_UPDATE_BINDING_KEY)
		.noargs();
	}
	
	@Bean
	public Binding newLikeBinding() {
		return BindingBuilder
		.bind(queue.newLikeQueue())
		.to(exchange.newLikeExchange())
		.with(NEW_LIKE_BINDING_KEY)
		.noargs();
	}
	
	@Bean
	public Binding newNotificationBinding() {
		return BindingBuilder
		.bind(queue.newNotificationQueue())
		.to(exchange.newNotificationExchange())
		.with(NEW_NOTIFICATION_BINDING_KEY)
		.noargs();
	}
}
