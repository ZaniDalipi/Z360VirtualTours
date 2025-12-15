import Link from 'next/link';
import {
  Globe,
  Eye,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Plus,
  MoreVertical,
} from 'lucide-react';
import { getTours, getCategories, getContactSubmissions, getStats } from '@/lib/db';
import { formatDate } from '@/lib/utils';

export default async function AdminDashboard() {
  const [stats, tours, categories, contacts] = await Promise.all([
    getStats(),
    getTours({ limit: 5 }),
    getCategories({ active: true }),
    getContactSubmissions({ status: 'new' }),
  ]);

  const statCards = [
    {
      title: 'Total Tours',
      value: stats.totalTours,
      icon: Globe,
      color: 'bg-blue-500',
      href: '/admin/tours',
    },
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      color: 'bg-green-500',
      href: '/admin/tours',
    },
    {
      title: 'New Contacts',
      value: stats.newContacts,
      icon: MessageSquare,
      color: 'bg-orange-500',
      href: '/admin/contacts',
    },
    {
      title: 'Total Places',
      value: stats.totalPlaces,
      icon: TrendingUp,
      color: 'bg-purple-500',
      href: '/admin/places',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Welcome back! Here&apos;s what&apos;s happening with your tours.</p>
        </div>
        <Link href="/admin/tours/new" className="btn btn-primary">
          <Plus className="w-5 h-5" />
          Add New Tour
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link
              key={index}
              href={stat.href}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-600 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Tours */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">Recent Tours</h2>
            <Link href="/admin/tours" className="text-[#0066FF] text-sm font-medium hover:underline flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {tours.length > 0 ? (
              tours.map((tour) => (
                <div key={tour.id} className="p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-slate-900 truncate">{tour.title}</h3>
                      <p className="text-sm text-slate-500">
                        {tour.views} views · {tour.location.city}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tour.isPublished ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tour.isPublished ? 'Published' : 'Draft'}
                      </span>
                      <Link
                        href={`/admin/tours/${tour.id}`}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500">
                No tours yet. Create your first tour!
              </div>
            )}
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">New Contacts</h2>
            <Link href="/admin/contacts" className="text-[#0066FF] text-sm font-medium hover:underline flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {contacts.length > 0 ? (
              contacts.slice(0, 5).map((contact) => (
                <div key={contact.id} className="p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-medium flex-shrink-0">
                      {contact.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-slate-900">{contact.name}</h3>
                        {contact.status === 'new' && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 truncate">{contact.message}</p>
                      <p className="text-xs text-slate-400 mt-1">{formatDate(contact.createdAt)}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-500">
                No new contact submissions.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-slate-900">Categories Overview</h2>
          <Link href="/admin/categories" className="text-[#0066FF] text-sm font-medium hover:underline">
            Manage Categories
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const tourCount = tours.filter(t => t.categoryId === category.id).length;
            return (
              <div
                key={category.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <h3 className="font-medium text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-500">{tourCount} tours</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-xl p-6 text-white">
        <h2 className="font-semibold text-xl mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/tours/new"
            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Tour</span>
          </Link>
          <Link
            href="/admin/categories"
            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Category</span>
          </Link>
          <Link
            href="/admin/contacts"
            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span>View Messages</span>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span>Site Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
