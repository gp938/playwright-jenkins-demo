pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm;
                git branch:'new-login',
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
                bat 'npx playwright test'
            }
        }
        stage('Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
       /* stage('Run allure') {
            steps {
                bat 'npm install -g allure-commandline '
            }
        }
        stage('allure-report'){
            steps{
                bat 'allure generate allure-results -o allure-report --clean'
        }
            }*/
        }
        post {
    always {
        archiveArtifacts artifacts: 'test-results/**/*.png',
                         allowEmptyArchive: true
    }
}
}
    

 

