java
package com.example.emailservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = {
    "http://localhost:3000",                  // Local frontend
    "https://subtle-cajeta-de7582.netlify.app"   // Production frontend (CHANGE THIS!)
})
@RequestMapping("/api/email") // 👈 Add base path
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public String sendEmail(
        @RequestParam String firstName,
        @RequestParam String lastName,
        @RequestParam String email,
        @RequestParam String company,
        @RequestParam(required = false) String phone,
        @RequestParam String businessType,
        @RequestParam String subject,
        @RequestParam String message,
        @RequestParam(required = false) MultipartFile attachment
    ) {
        try {
            emailService.sendContactForm(firstName, lastName, email, company, phone,
                                         businessType, subject, message, attachment);
            return "Message sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error sending message.";
        }
    }
}
