import dynamoose from "dynamoose";
dynamoose.aws.ddb.local("http://localhost:8000");

const Thing = dynamoose.model("MyThingTable", {
	id: {
		type: String,
		hashKey: true,
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
