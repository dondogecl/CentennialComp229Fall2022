# MongoDB

- Start the service (runs in the background)
	mongod

- Open CLI in a new terminal
	mongo

- List collections
	show collections
	show dbs

- List current data base
	db
 
- Create a new collection
	use new_database_name

- Insert a document into a collection
	use collection_name
	db.collection_name.insert( {"key" : "value", "key2", "value2"} )

- Insert many records

	db.student.insertMany(
	[
	{
	"student_info":"AA01","student_name":"Yui", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"2","student_dob":"24-12-2019"},

	{"student_info":"AA02","student_name":"Ana", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"20","student_dob":"24-12-2002"},

	{"student_info":"AA03","student_name":"Ben", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA04","student_name":"Roy", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA05","student_name":"Ken", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA06","student_name":"Pam", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA07","student_name":"Gon", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA08","student_name":"Kil", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA09","student_name":"Dog", "student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"},

	{"student_info":"AA10","student_name":"Yor","student_address":[{"street": "27 Elm St","city": "Chicago", "state_prov" : "ON", "zip" : "12345", "country" : "CAN"}], "student_age":"30","student_dob":"24-12-1992"}
	]
	);

- show the records from the 'student' collection
	db.student.find().pretty()

- update a record from the 'student' collection
	db.student.update({"student_info": "AA10"}, { $set: {"country" : "SpyFamily"}} )