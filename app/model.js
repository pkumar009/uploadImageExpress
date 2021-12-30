module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        emp_name: String,
        email: String,
        published: Boolean,
        mobile:Number,
        department: String,
        role: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };
  