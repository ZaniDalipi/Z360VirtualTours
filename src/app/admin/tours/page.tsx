import Link from 'next/link';
import {
  Plus,
  Search,
  Filter,
  Globe,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Star,
  ExternalLink,
} from 'lucide-react';
import { getTours, getCategories } from '@/lib/db';
import { formatDate } from '@/lib/utils';

export default async function AdminToursPage() {
  const [tours, categories] = await Promise.all([
    getTours(),
    getCategories({ active: true }),
  ]);

  const getCategoryName = (id: string) => {
    const category = categories.find(c => c.id === id);
    return category?.name || 'Unknown';
  };

  const platformLabels: Record<string, string> = {
    matterport: 'Matterport',
    cloudpano: 'CloudPano',
    '3dvista': '3DVista',
    kuula: 'Kuula',
    panoee: 'Panoee',
    teliportme: 'TeliportMe',
    custom: 'Custom',
    iframe: 'External',
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tours</h1>
          <p className="text-slate-600">Manage your 360° virtual tours</p>
        </div>
        <Link href="/admin/tours/new" className="btn btn-primary">
          <Plus className="w-5 h-5" />
          Add New Tour
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search tours..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg border-none focus:ring-2 focus:ring-[#0066FF]/30"
            />
          </div>

          {/* Category Filter */}
          <select className="px-4 py-2 bg-slate-100 rounded-lg border-none focus:ring-2 focus:ring-[#0066FF]/30">
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select className="px-4 py-2 bg-slate-100 rounded-lg border-none focus:ring-2 focus:ring-[#0066FF]/30">
            <option value="">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Tours Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Tour</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Category</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Platform</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Views</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Date</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tours.length > 0 ? (
                tours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-6 h-6 text-slate-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-slate-900">{tour.title}</h3>
                            {tour.isFeatured && (
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            )}
                          </div>
                          <p className="text-sm text-slate-500">
                            {tour.location.city}, {tour.location.state}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                        {getCategoryName(tour.categoryId)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {platformLabels[tour.embedType]}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tour.isPublished
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tour.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Eye className="w-4 h-4" />
                        {tour.views.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDate(tour.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/portfolio/${tour.slug}`}
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                          title="View"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/tours/${tour.id}`}
                          className="p-2 text-slate-400 hover:text-[#0066FF] hover:bg-[#0066FF]/10 rounded-lg"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No tours found. Create your first tour!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {tours.length > 0 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Showing {tours.length} of {tours.length} tours
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 rounded-lg bg-[#0066FF] text-white text-sm">
                1
              </button>
              <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Help Text */}
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="font-semibold text-blue-900 mb-2">Supported Platforms</h3>
        <p className="text-sm text-blue-700">
          You can embed tours from: <strong>Matterport</strong>, <strong>CloudPano</strong>,{' '}
          <strong>3DVista</strong>, <strong>Kuula</strong>, <strong>Panoee</strong>,{' '}
          <strong>TeliportMe</strong>, or any custom iframe URL.
        </p>
      </div>
    </div>
  );
}
