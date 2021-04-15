@directory-service 
Feature: DirectoryService
    Para administrar funcionalidades del keyBoard 
    como desarrollador 
    quiero asegurarme que las operaciones crud de la secuencia de comandos funcione bien

    Scenario Outline: crear un conjunto de comandos 
        Given un conjunto de comandos <request> 
        When envio una solicitud POST a /commands
        Then yo obtengo el codigo de respuesta 201  
    
    Examples:
      | request                                                                                               |
      | {"name":"compile and push proyect","describe":"Este comando se basa en compliar la socuion y hacer el push al repositorio remoto","commands":["Command 1","command 2" , "command 3"], "aparams":"1"} |


    Scenario Outline: Consultar  un comando.
        Given un comando con el <id> 
        When envio una solicitud GET a /commands/
        Then yo obtengo el commando con respuesta <command>  
    
    Examples:
      | id            | command |
      | 1             | {"id":1, "name":"compile and push proyect","describe":"Este comando se basa en compliar la socuion y hacer el push al repositorio remoto","commands":["Command 1","command 2" , "command 3"], "aparams":"1"}   |

