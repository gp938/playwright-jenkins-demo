pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm;
                //git branch:'new-login',
                //url:'https://github.com/gp938/playwright-jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Clean Reports') {
    steps {
        bat """
            if exist allure-results rmdir /s /q allure-results
            if exist allure-report rmdir /s /q allure-report
            if exist test-results rmdir /s /q test-results
        """
          }
       }
        stage('Run Playwright Tests') {
            steps {
               catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'  ){
                bat 'npx playwright test'
            }
            }
        }
        /* stage('Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        } */
           } 
           post {
        always {
            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }
    }
    }


    

 

