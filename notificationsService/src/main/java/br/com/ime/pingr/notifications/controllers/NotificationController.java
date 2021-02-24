package br.com.ime.pingr.notifications.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notification")
public class NotificationController {

	@GetMapping
	public String helloNotification() {
		return "Hello Notification!";
	}
}