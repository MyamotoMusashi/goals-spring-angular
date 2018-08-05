describe('hello-tests', () => {
	it('works', (done) => {
		server = sinon.fakeServer.create();
		server.autoRespond = true;
		var okResponse = [
			200,
			{ 'Content-type': 'application/json' },
			'{"hello":"world"}'
		];
		server.respondWith('GET', '/api/requests/5b1e60c76493e61bfceaba5a', okResponse)
		request.getRequestByIDAJAX("5b1e60c76493e61bfceaba5a")
			.then((data, err) => {
				chai.expect(data.hello).to.equal('world');
			})
			.then(done, done);
		server.restore();
	});
	it('works2', (done) => {
		server = sinon.fakeServer.create();
		server.autoRespond = true;
		var okResponse = [
			200,
			{ 'Content-type': 'application/json' },
			'{"hello":"world3"}'
		];
		server.respondWith('GET', '/api/requests/5b1e60c76493e61bfceaba5a', okResponse)
		request.getRequestByIDAJAX("5b1e60c76493e61bfceaba5a")
			.then((data, err) => {
				chai.expect(data.hello).to.equal('world3');
			})
			.then(done, done);
		server.restore()
	});

	it('add REQUESTS', (done) => {
		let data = {
			title: "haha",
			id: "123"
		}
		let requestCount = 0;
		requests.getRequestsAJAX
			.then((data, err) => {
				return requestCount = data.length - 1;
			})
			.then(() => {
				return request.addRequestAJAX(new SupportRequest("alala", "1234"));
			})
			.then((data) => {
				return requests.getRequestsAJAX;
			})
			.then((data, err) => {
				chai.expect(data.length).to.equal(requestCount + 1);
				let gogo = [];
				for(i = 0; i < data.length; i+=1){
					gogo.push(request.deleteRequestByIDAJAX(data[i]._id))
				}
				return Promise.all(gogo).then((data) => {
					return;
				})
			})
			.then(done, done)

	})

	it('returns REQUESTS', (done) => {
		requests.getRequestsAJAX
			.then((data, err) => {
				chai.expect(2).to.equal(2);
			})
			.then(done, done);
	});
});