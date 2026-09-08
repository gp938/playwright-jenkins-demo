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
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            
        }

        success {
            echo 'Playwright tests passed successfully!'
        }

        failure {
            echo 'Playwright tests failed!'
        }
    }
}
post {
    always {
        publishHTML([
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright Report'
        ])
    }
}



