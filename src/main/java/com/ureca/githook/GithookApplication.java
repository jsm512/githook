package com.ureca.githook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GithookApplication {

  public static void main(String[] args) {
    SpringApplication.run(GithookApplication.class, args);
    System.out.println("Test입니다.");
  }
}
