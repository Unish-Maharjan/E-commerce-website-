import React, { useState } from 'react'

const InputField = ({ label, icon, error, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600 flex items-center gap-1.5">
      <span className="text-gray-400">{icon}</span>
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-4 py-2.5 border rounded-lg text-sm text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 placeholder:text-gray-400
        ${error
          ? 'border-red-300 focus:ring-red-200'
          : 'border-gray-200 focus:ring-red-100 focus:border-red-400'
        }`}
    />
    {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
  </div>
)

const Addproduct = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = 'Title is required';
    if (!description.trim()) e.description = 'Description is required';
    if (!price || isNaN(Number(price)) || Number(price) <= 0) e.price = 'Enter a valid price';
    if (!image.trim()) e.image = 'Image URL is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const setProduct = { title, description, price: Number(price), thumbnail: image };
    props.addproduct(setProduct);
    setSubmitted(true);
    setTitle(''); setDescription(''); setPrice(''); setImage('');
    setErrors({});
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isValidImageUrl = image.startsWith('http');

  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-8 bg-red-500 rounded" />
          <div>
            <p className="text-red-500 font-semibold text-sm tracking-wide uppercase">Inventory</p>
            <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>
          </div>
        </div>

        {/* Success banner */}
        {submitted && (
          <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Product added successfully!
          </div>
        )}

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex gap-8">

          {/* Form */}
          <form className="flex flex-col gap-5 flex-1" onSubmit={handleSubmit}>

            <InputField
              label="Product Title"
              icon={
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 12h6" />
                </svg>
              }
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setErrors(p => ({ ...p, title: '' })) }}
              placeholder="e.g. Wireless Headphones"
              error={errors.title}
            />

            <InputField
              label="Description"
              icon={
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10" />
                </svg>
              }
              type="text"
              value={description}
              onChange={(e) => { setDescription(e.target.value); setErrors(p => ({ ...p, description: '' })) }}
              placeholder="Brief product description"
              error={errors.description}
            />

            <InputField
              label="Price (USD)"
              icon={
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              }
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => { setPrice(e.target.value); setErrors(p => ({ ...p, price: '' })) }}
              placeholder="0.00"
              error={errors.price}
            />

            <InputField
              label="Image URL"
              icon={
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              type="url"
              value={image}
              onChange={(e) => { setImage(e.target.value); setErrors(p => ({ ...p, image: '' })) }}
              placeholder="https://example.com/image.jpg"
              error={errors.image}
            />

            <button
              type="submit"
              className="mt-2 w-full bg-red-500 hover:bg-gray-800 active:scale-[0.98] text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Product
            </button>

          </form>

          {/* Live Preview */}
          <div className="w-44 shrink-0 flex flex-col gap-3">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Preview</p>
            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col bg-white">
              <div className="h-36 bg-gray-50 flex items-center justify-center">
                {isValidImageUrl ? (
                  <img
                    src={image}
                    alt="preview"
                    className="max-h-full max-w-full object-contain p-3"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-gray-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[10px]">No image</span>
                  </div>
                )}
              </div>
              <div className="p-3 flex flex-col gap-1">
                <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">
                  {title || <span className="text-gray-300">Product title</span>}
                </p>
                <p className="text-sm font-bold text-red-500">
                  {price ? `$${Number(price).toFixed(2)}` : <span className="text-gray-300 font-normal text-xs">$0.00</span>}
                </p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center leading-snug">Updates as you type</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Addproduct