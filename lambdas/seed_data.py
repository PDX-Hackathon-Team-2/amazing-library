import json
import boto3
import json
def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('test')
    s3_client = boto3.client('s3')
    obj=s3_client.get_object(Bucket='seed-data-library', Key='Boo.txt')
    lines = obj["Body"].read().decode("utf-8")
    lines_lst = lines.splitlines()
    for n,ln in enumerate(lines_lst):
        if n > 0:
            lst = ln.split('\t')
            if lst[6]:
                item = {"book_id":str(n), "title":lst[0], "genre":lst[1], "readingLevel":lst[2], "author":lst[3], "condition":lst[4], 'bookStatus':lst[5], 'assignedTo':lst[6]}
            else:
                item = {"book_id":str(n), "title":lst[0], "genre":lst[1], "readingLevel":lst[2], "author":lst[3], "condition":lst[4], 'bookStatus':lst[5]}
            table.put_item(Item=item)
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
