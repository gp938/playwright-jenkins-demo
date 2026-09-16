pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
              //  checkout scm
                git branch:'feature-login',
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

        // stage('Run Playwright Tests') {
        //     steps {
        //       //  bat 'npx playwright test'
        //     }
        // }
          stage('Clean Allure') {
    steps {
        powershell '''
            Remove-Item -Recurse -Force .\\allure-report\\ -ErrorAction SilentlyContinue
            Remove-Item -Recurse -Force .\\test-results\\ -ErrorAction SilentlyContinue
            Remove-Item -Recurse -Force .\\playwright-report\\ -ErrorAction SilentlyContinue
        '''
    }
}
          stage('Run Playwright Tests new') {
             steps {
                
             catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
             
             bat 'npx playwright test'
        }
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
        stage('screenshot-report') {
            steps {
                 archiveArtifacts artifacts: 'test-results/**/*',
                 allowEmptyArchive: true
                  }
        }
          
     }

   
}

