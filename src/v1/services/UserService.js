const { User: Model, Image, Branch } = require('../models');
const BaseService = require('./BaseService');

class UserService extends BaseService {
	Model;
	static className = 'UserService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.include = [
			{
				model: Image,
				as: 'images',
				attributes: [
					'id',
					'public_id',
					'secure_url',
					'width',
					'height',
				],
				through: { attributes: [] },
			},
			{
				model: Branch,
			},
		];

		this.has_images = true;
	}
}

module.exports = UserService;
