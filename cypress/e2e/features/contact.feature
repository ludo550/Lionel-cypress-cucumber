Feature: Contact page

    Feature Contact Page information submission.

    Background:
        Given A web browser visits Sinnemar Contact Page

    Scenario: Error is displayed
        When A user provides insufficient information, and clicks on the submit button
            | name     | email                             |
            | Lionel   | testfirst.testlast@test.com       |
        Then The error message "Internal Server Error" is displayed

    Scenario: contactus.html is displayed
        When A user enters a name "Lionel", an email "Mendonca", a phone number "1234567", a subject "This is a test subject", a message "This is a test message", and clicks on the send button
        Then the url will contains the contact post page

    Scenario: Dummy test to complete video recording
        Then This a dummy step