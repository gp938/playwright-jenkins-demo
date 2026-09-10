pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch:'main',
                url:'https://github.com/gp938/playwright-jenkins-demo.git'
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

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
        stage('Run allure') {
            steps {
                bat 'npm install -g allure-commandline '
            }
        }
        stage('allure-report'){
            steps{
                bat 'allure generate allure-results -o allure-report --clean'
        }
            }
        }
}
    

 

