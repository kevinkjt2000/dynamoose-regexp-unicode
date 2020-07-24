import dynamoose from "dynamoose";
// docker run --rm -p 127.0.0.1:8000:8000 --name dynamodb amazon/dynamodb-local
dynamoose.aws.ddb.local("http://localhost:8000");

const Thing = dynamoose.model("MyThingTable", {
	id: {
		type: String,
		required: true,
		validate: /(user|team):.+/gu
	}
});

Thing.batchPut([{ id: "user:blah" }])
	.then(() => {
		console.log("made it past");
	})
	.catch(error => {
		console.error(error);
	});
