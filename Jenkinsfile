pipeline {
  agent any

  options {
    timeout(time: 30, unit: 'MINUTES')
    skipStagesAfterUnstable()
  }

  parameters {
    string(name: 'REGISTRY', defaultValue: 'docker.io', description: 'Docker registry (e.g. docker.io)')
    string(name: 'IMAGE_REPO', defaultValue: 'your-dockerhub-username/ayee-portal', description: 'Repository (e.g. user/app)')
    string(name: 'IMAGE_TAG', defaultValue: '', description: 'Optional tag; leave blank to auto')
    string(name: 'DOCKER_CREDS_ID', defaultValue: 'dockerhub', description: 'Jenkins Credentials ID for registry login')
  }

  stages {
    stage('Checkout') {
      steps {
        echo '>>> Checking out code from SCM...'
        checkout scm
      }
    }

    stage('Resolve Tags') {
      steps {
        script {
          def tag = params.IMAGE_TAG?.trim()
          if (!tag) {
            if (env.BUILD_NUMBER) {
              tag = env.BUILD_NUMBER
            } else if (env.GIT_COMMIT) {
              tag = env.GIT_COMMIT.take(7)
            } else {
              tag = 'latest'
            }
          }
          env.BUILD_IMAGE = "${params.REGISTRY}/${params.IMAGE_REPO}"
          env.BUILD_TAG = tag
          echo ">>> Image: ${env.BUILD_IMAGE}:${env.BUILD_TAG}"
        }
      }
    }

    stage('Docker Build (multi-stage)') {
      steps {
        echo '>>> Building Docker image using Dockerfile (multi-stage)...'
        script {
          def buildCmd = "docker build -t ${env.BUILD_IMAGE}:${env.BUILD_TAG} -t ${env.BUILD_IMAGE}:latest ."
          if (isUnix()) {
            sh buildCmd
          } else {
            bat buildCmd
          }
        }
      }
    }

    stage('Docker Push') {
      steps {
        echo '>>> Logging into registry and pushing image...'
        script {
          if (isUnix()) {
            withCredentials([usernamePassword(credentialsId: params.DOCKER_CREDS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
              sh """
                echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin ${params.REGISTRY}
                docker push ${env.BUILD_IMAGE}:${env.BUILD_TAG}
                docker push ${env.BUILD_IMAGE}:latest
              """
            }
          } else {
            withCredentials([usernamePassword(credentialsId: params.DOCKER_CREDS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
              bat """
                echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin ${params.REGISTRY}
                docker push ${env.BUILD_IMAGE}:${env.BUILD_TAG}
                docker push ${env.BUILD_IMAGE}:latest
              """
            }
          }
        }
      }
    }

    // Optional deploy stage: enable and customize for your environment
    // stage('Deploy') {
    //   when { expression { return false } } // set to true/condition when ready
    //   steps {
    //     echo '>>> Deploying container (customize for your infra)...'
    //     // Example (same host):
    //     // sh "docker pull ${env.BUILD_IMAGE}:${env.BUILD_TAG} && \
    //     //     docker rm -f ayee-portal || true && \
    //     //     docker run -d --name ayee-portal -p 80:80 ${env.BUILD_IMAGE}:${env.BUILD_TAG}"
    //   }
    // }
  }

  post {
    always { echo 'Pipeline finished.' }
    success { echo '✅ Image built and pushed successfully.' }
    failure { echo '❌ Pipeline failed.' }
  }
}
