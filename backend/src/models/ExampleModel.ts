import { Schema, SchemaTypes, model } from "mongoose"

const ExampleSchema = new Schema({
    fieldOne: {type: SchemaTypes.String}
});

module.exports = model("Example", ExampleSchema);