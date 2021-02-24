package com.rabbitmq.rabbitmqdemo;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.QueueBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQQueueConfiguration {

	private static final String NEW_LIKE_QUEUE = "NewLikeQueue";
	private static final String NEW_NOTIFICATION_QUEUE = "NewNotificationQueue";
	private static final String USER_UPDATE_QUEUE = "UserUpdateQueue";
	private static final String USER_REMOVE_QUEUE = "UserRemoveQueue";

	@Bean
	public Queue userRemoveQueue() {
		return QueueBuilder.durable(USER_REMOVE_QUEUE).build();
	}
	
	@Bean
	public Queue userUpdateQueue() {
		return QueueBuilder.durable(USER_UPDATE_QUEUE).build();
	}
	
	@Bean
	public Queue newNotificationQueue() {
		return QueueBuilder.durable(NEW_NOTIFICATION_QUEUE).build();
	}
	
	@Bean
	public Queue newLikeQueue() {
		return QueueBuilder.durable(NEW_LIKE_QUEUE).build();
	}
}
