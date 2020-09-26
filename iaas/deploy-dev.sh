#!/bin/bash

set -e

sam package --s3-bucket backent-dev-test --template-file pipeline.yml
sam deploy --s3-bucket backent-dev-test --stack-name backend-test \
  --template-file pipeline.yml --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
  --parameter-overrides \
    env=dev \
    nodeEnv=development \
    branch=develop \
    vpcSecurityGroupIds="sg-0a731649b0f535aee" \
    vpcSubnetIds="subnet-0ef36ed795ea0f74e,subnet-0556410c637112342" \
    vpcId=vpc-0df6ff91f6f01e080
