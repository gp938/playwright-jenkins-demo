```groovy
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
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true

            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }

        success {
            echo 'Playwright tests passed successfully!'
        }

        failure {
            echo 'Playwright tests failed!'
        }
    }
}
```

### Add it to your Git repo

From your Playwright project directory:

```bash
touch Jenkinsfile
```

Paste the above content into `Jenkinsfile`, then:

```bash
git add Jenkinsfile
git commit -m "Add Jenkins pipeline"
git push origin main
```

Your repository should look roughly like:

```text
playwright-project/
├── tests/
├── playwright.config.ts
├── package.json
├── package-lock.json
└── Jenkinsfile
```

### Jenkins setup

Create a **Pipeline** job in Jenkins → **Pipeline** → set **Definition** to **Pipeline script from SCM**, then select Git and provide your repository URL and credentials.

Set:

```text
Script Path: Jenkinsfile
```

Then click **Build Now**.

**Important:** the Jenkins agent needs Node.js/npm and enough permissions to run `npx playwright install --with-deps`. If you're using a Docker-based Jenkins agent, I can give you a **Playwright + Docker Jenkinsfile** that is usually easier and more reliable.
