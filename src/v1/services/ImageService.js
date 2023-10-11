const { Image: Model } = require('../models');
const BaseService = require('./BaseService');

class CustomerService extends BaseService {
	Model;
	static className = 'CustomerService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [];
	}
}

module.exports = CustomerService;
