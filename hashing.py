from flask import Flask
from werkzeug.security import generate_password_hash,check_password_hash


app = Flask(__name__)

@app.route('/<password>')
def index(password):

	hashed_value = generate_password_hash(password)

	return hashed_value

#need to have a method that checks for username
#then checks for corresponding password, and hashed password
# if both boolean values == True then log in


if __name__ == '__main__':
	app.run(debug=True)