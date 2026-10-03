pipeline {
    agent any

    environment {
        DOCKER_NETWORK = 'jenkins-net'
        IMAGE_NAME = 'playwright-tests'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Check') {
            steps {
                bat 'docker --version'
                bat 'docker info'
            }
        }

        stage('Create Network') {
            steps {
                bat '''
                    docker network inspect %DOCKER_NETWORK% >nul 2>&1
                    IF ERRORLEVEL 1 (
                        docker network create %DOCKER_NETWORK%
                    )
                '''
            }
        }

        stage('Build Playwright Image') {
            steps {
                bat '''
                    docker build -t %IMAGE_NAME%:%IMAGE_TAG% .
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat '''
                    docker run --rm ^
                        --network %DOCKER_NETWORK% ^
                        %IMAGE_NAME%:%IMAGE_TAG%
                '''
            }
        }
    }

    post {
        always {
            echo 'Playwright execution completed.'
        }

        success {
            echo 'Playwright tests passed.'
        }

        failure {
            echo 'Playwright tests failed.'
        }

        cleanup {
            bat '''
                docker image rm %IMAGE_NAME%:%IMAGE_TAG% || exit 0
            '''
        }
    }
}
