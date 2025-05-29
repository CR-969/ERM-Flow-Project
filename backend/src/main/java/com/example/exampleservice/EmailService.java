package com.example.emailservice;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactForm(String firstName, String lastName, String email, String company,
                                String phone, String businessType, String subject,
                                String messageBody, MultipartFile attachment) throws Exception {

        MimeMessage message = mailSender.createMimeMessage();

        boolean multipart = (attachment != null && !attachment.isEmpty());
        MimeMessageHelper helper = new MimeMessageHelper(message, multipart);

        helper.setFrom(email);  // sender as the user's email
        helper.setTo("riselynx@gmail.com"); // receiver email (your inbox)
        helper.setSubject(subject);

        String content = String.format(
                "Name: %s %s\nEmail: %s\nCompany: %s\nPhone: %s\nBusiness Type: %s\n\nMessage:\n%s",
                firstName, lastName, email, company, phone == null ? "N/A" : phone, businessType, messageBody
        );

        helper.setText(content);

        if (multipart) {
            InputStreamSource source = new ByteArrayResource(attachment.getBytes());
            helper.addAttachment(attachment.getOriginalFilename(), source);
        }

        mailSender.send(message);
    }
}
