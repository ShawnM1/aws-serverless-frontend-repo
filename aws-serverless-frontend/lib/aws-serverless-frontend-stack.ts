import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cdk from "aws-cdk-lib";
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';


export class AwsServerlessFrontendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const frontendBucket = new s3.Bucket(this, 'FontendBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      websiteErrorDocument: 'index.html',
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    new s3Deploy.BucketDeployment(this, 'DeployFrontend', {
      destinationBucket: frontendBucket,
      sources: [s3Deploy.Source.asset('../frontend/dist/frontend')],

    });

    new cdk.CfnOutput(this, 'URL', {
      description: 'The url of the website',
      value: frontendBucket.bucketWebsiteUrl
    });

    const myLambda = new nodeLambda.NodejsFunction(this,'users-lambda', {
      bundling: {
        nodeModules: ['axios']
      }
    });

    new apigw.LambdaRestApi(this, 'UsersEndpoint', {
      handler: myLambda,
      defaultCorsPreflightOptions: {
        allowOrigins: apigw.Cors.ALL_ORIGINS
      }
    });
  }
}
