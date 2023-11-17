Feature: Api


    Feature Api request

    Scenario: Api response has relevant information
      When We make an api get request to url "https://randomuser.me/api"
      Then the response should have a status code of "200" and relevant information