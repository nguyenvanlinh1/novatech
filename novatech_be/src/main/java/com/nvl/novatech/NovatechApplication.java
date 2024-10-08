package com.nvl.novatech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

@EnableScheduling
@SpringBootApplication
@EnableFeignClients
public class NovatechApplication {

	public static void main(String[] args) {
		SpringApplication.run(NovatechApplication.class, args);
	}


	@Bean
	public TaskScheduler  taskScheduler(){
		ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
		scheduler.setPoolSize(5);
		scheduler.setThreadNamePrefix("scheduled-task-");
		scheduler.setDaemon(true);
		return scheduler;
	}
}
