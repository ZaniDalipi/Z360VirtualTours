'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Save,
  Globe,
  MapPin,
  Tag,
  Building2,
  Star,
  Eye,
  Plus,
  X,
  Loader2,
  Info,
} from 'lucide-react';

const embedTypes = [
  { value: 'matterport', label: 'Matterport', example: 'https://my.matterport.com/show/?m=...' },
  { value: 'cloudpano', label: 'CloudPano', example: 'https://app.cloudpano.com/tours/...' },
  { value: '3dvista', label: '3DVista', example: 'https://www.3dvista.com/tour/...' },
  { value: 'kuula', label: 'Kuula', example: 'https://kuula.co/share/...' },
  { value: 'panoee', label: 'Panoee', example: 'https://panoee.com/...' },
  { value: 'teliportme', label: 'TeliportMe', example: 'https://teliportme.com/tour/...' },
  { value: 'iframe', label: 'Custom/Other', example: 'Any valid URL' },
];

const categories = [
  { id: '1', name: 'Real Estate' },
  { id: '2', name: 'Business Showcase' },
  { id: '3', name: 'Location Showcase' },
  { id: '4', name: 'Hospitality' },
  { id: '5', name: 'Education' },
  { id: '6', name: 'Healthcare' },
  { id: '7', name: 'Automotive' },
  { id: '8', name: 'Museums & Culture' },
];

export default function NewTourPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [featureInput, setFeatureInput] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    categoryId: '',
    embedUrl: '',
    embedType: 'matterport',
    thumbnailUrl: '',
    address: '',
    city: '',
    state: '',
    country: 'USA',
    clientName: '',
    clientWebsite: '',
    isFeatured: false,
    isPublished: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const addFeature = () => {
    if (featureInput.trim() && !features.includes(featureInput.trim())) {
      setFeatures([...features, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const removeFeature = (feature: string) => {
    setFeatures(features.filter(f => f !== feature));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In production, this would POST to an API endpoint
    console.log('Tour data:', { ...formData, tags, features });

    setIsSubmitting(false);
    router.push('/admin/tours');
  };

  const selectedPlatform = embedTypes.find(t => t.value === formData.embedType);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/tours"
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add New Tour</h1>
          <p className="text-slate-600">Create a new 360° virtual tour</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tour Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="e.g., Luxury Waterfront Villa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Short Description *
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Brief description for cards and previews"
                    maxLength={200}
                  />
                  <p className="text-xs text-slate-500 mt-1">{formData.shortDescription.length}/200 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input resize-none"
                    placeholder="Detailed description of the tour..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Tour Embed */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#0066FF]" />
                Tour Embed Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Platform *
                  </label>
                  <select
                    name="embedType"
                    value={formData.embedType}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    {embedTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Embed URL *
                  </label>
                  <input
                    type="url"
                    name="embedUrl"
                    value={formData.embedUrl}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder={selectedPlatform?.example}
                  />
                  <div className="flex items-start gap-2 mt-2 text-xs text-slate-500">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      Enter the full URL from {selectedPlatform?.label}. Example: {selectedPlatform?.example}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Thumbnail URL
                  </label>
                  <input
                    type="url"
                    name="thumbnailUrl"
                    value={formData.thumbnailUrl}
                    onChange={handleChange}
                    className="input"
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0066FF]" />
                Location
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input"
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Los Angeles"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="CA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="input"
                    placeholder="USA"
                  />
                </div>
              </div>
            </div>

            {/* Features & Tags */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-[#0066FF]" />
                Features & Tags
              </h2>
              <div className="space-y-6">
                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Features
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                      className="input flex-1"
                      placeholder="e.g., 5 Bedrooms, Ocean View"
                    />
                    <button
                      type="button"
                      onClick={addFeature}
                      className="btn btn-outline"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-sm"
                      >
                        {feature}
                        <button
                          type="button"
                          onClick={() => removeFeature(feature)}
                          className="text-slate-400 hover:text-slate-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tags
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      className="input flex-1"
                      placeholder="e.g., luxury, modern, waterfront"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="btn btn-outline"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm"
                      >
                        #{tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-[#0066FF]/60 hover:text-[#0066FF]"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0066FF]" />
                Client Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Client Name
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    className="input"
                    placeholder="Company or individual name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Client Website
                  </label>
                  <input
                    type="url"
                    name="clientWebsite"
                    value={formData.clientWebsite}
                    onChange={handleChange}
                    className="input"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-4">Publish</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-slate-300 text-[#0066FF] focus:ring-[#0066FF]"
                  />
                  <div>
                    <span className="font-medium text-slate-900 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Published
                    </span>
                    <p className="text-xs text-slate-500">Tour will be visible to the public</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-slate-300 text-[#0066FF] focus:ring-[#0066FF]"
                  />
                  <div>
                    <span className="font-medium text-slate-900 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                    <p className="text-xs text-slate-500">Show on homepage and featured sections</p>
                  </div>
                </label>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Tour
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Tips</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Use descriptive titles that include the property type and location</li>
                <li>• Add relevant tags to improve searchability</li>
                <li>• Include key features to highlight what makes this tour special</li>
                <li>• Test your embed URL before publishing</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
