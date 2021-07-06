# cloud-server

## AWS: Cloud Servers

  - Deploy a Node.js server to [AWS](https://aws.amazon.com/console/) [EC2](https://aws.amazon.com/ec2/getting-started/) using [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/getting-started/) 

## Feature Tasks

  - Task 1:
    - Create a new environment, using [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/getting-started/) from the [AWS Control Panel](https://aws.amazon.com/console/) (GUI)
    - Manually deploy your application to this environment by uploading a .zip file

  - Task 2:
    - Using the same server, create a new environment using [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/getting-started/) from your terminal
    - Manually deploy your application to this environment by using eb deploy

    Steps to Set up in CLI
    1. install aws and eb in terminal
      - check for version `aws --version` and `eb --version`
    2. go to AWS console -> Services -> Security, Identity,& Compliance -> click (IAM)
    3. create new user and write down access key and secret key
    4. in terminal enter `aws config`
    5. in terminal enter `eb init` only on the CLI
    6. `eb create (some_environment_name)`: Porvision an environment on AWS EC2
    7. `eb deploy` : runs our software in the provisioned environment

  - Stretch Goal:

    - Automatically deploy your app to either (or both) environments on check-ins to your main branch using a github action

## Links

  - [GUI deploy](http://cloudserverexpressgui-env.eba-fvbzsmky.us-west-2.elasticbeanstalk.com/)

  - [CLI deploy](http://node-express.eba-mija8sbx.us-west-2.elasticbeanstalk.com/)

    - [EB CLI command reference](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html)
