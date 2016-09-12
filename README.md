![Mou icon](http://bytabo.de/img/bytabo.png)

## node-angular2-docker-boilerplate


**Boilerplate** for an *Angular2* Project and *NodeJS* including a *Dockerfile* and it is useful for *microservices* including *rest*, *amqp* and *sockets*. It works only with npm, no bower, so we have an easy setup

This repository is still under construction. Please try again later.



#### Installation


1. Clone the repo
2. Install Docker
3. cd to your project (where Dockerfile is included)
4. Build the Image: 
	
		$sudo docker build -t bytabo/node-angular2-docker-boilerplate . 		
		
5. Run the Image: 

		$docker run -p 49160:8080 -d bytabo/node-angular2-docker-boilerplate 	

Ready!


Powered by [bytabo](http://chenluois.com).