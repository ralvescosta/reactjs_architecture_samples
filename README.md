# Simple MVC AND MVVM Todo Application

_This aplication is boilerplate to future implementations using MVC or MVVM architecture with TDD_


## Disclaimer

- The concepts and the application presented here is not an absolute truth, is only my opinion with basic architecture concepts that i learned with my works and my studies. If someone has some diferente opinions, feel free to create an issues so we can talk, i always want to learn more ;)

## Basics concepts

- __View :__ User Interface, parte of the application that the users interact with
- __Model :__ Normally contains application data models and business logics, but on this project the Model layer is responsible only to data models
- __Controller :__ Business logics 
    - On MVC controller has responsibility of intermediating with the view and business logic
    - On MVVM controller has only business logic
- __ViewModel :__ Responsibility of intermediating with the view and business logics (Controller)