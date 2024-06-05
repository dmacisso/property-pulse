import { Schema, model, models } from 'mongoose';

const propertySchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: [true, 'Name is required'] },
    type: { type: String, required: [true, 'Type is required'] },
    description: {
      type: String,
    },
    location: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    beds: { type: Number, required: [true, 'Beds is required'] },
    baths: { type: Number, required: [true, 'Baths is required'] },
    square_feet: { type: Number, required: [true, 'Square feet is required'] },
    amenities: [{ type: String }],
    rates: {
      nightly: { type: Number },
      weekly: { type: Number },
      monthly: { type: Number },
    },
    seller_info: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Property = models.Property || model('Property', propertySchema);
export default Property;
