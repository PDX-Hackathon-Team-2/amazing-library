import json
import boto3


def lambda_handler(event, context):
    # TODO implement
    ddb_res = boto3.resource("dynamodb")
    ddb_client = boto3.client("dynamodb")
    table = ddb_res.Table("test")
    print(event)
    if event["queryStringParameters"]:
        resp = table.get_item(
           Key=event["queryStringParameters"]
        )
        return {"statusCode": 200, "body": json.dumps(resp['Item'])}
    else:

        x = table.scan()
        print(x)
        return {"statusCode": 200, "body": json.dumps(x)}
