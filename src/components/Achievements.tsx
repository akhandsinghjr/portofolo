import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy, Code2, Target, Star, TrendingUp, CheckCircle } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data for graphs
const ratingHistory = [
  { month: 'Jan', rating: 1200 },
  { month: 'Feb', rating: 1350 },
  { month: 'Mar', rating: 1450 },
  { month: 'Apr', rating: 1600 },
  { month: 'May', rating: 1750 },
  { month: 'Jun', rating: 1900 },
];

const problemDistribution = [
  { name: 'Easy', value: 150, color: '#4ade80' },
  { name: 'Medium', value: 100, color: '#fbbf24' },
  { name: 'Hard', value: 50, color: '#f87171' },
];

const monthlyProgress = [
  { month: 'Jan', solved: 20 },
  { month: 'Feb', solved: 35 },
  { month: 'Mar', solved: 45 },
  { month: 'Apr', solved: 60 },
  { month: 'May', solved: 75 },
  { month: 'Jun', solved: 90 },
];

const stats = [
  { 
    title: 'LeetCode Rating',
    value: '1900+',
    icon: TrendingUp,
    color: 'text-blue-400'
  },
  { 
    title: 'Codeforces Rating',
    value: '1600+',
    icon: Target,
    color: 'text-purple-400'
  },
  { 
    title: 'Problems Solved',
    value: '300+',
    icon: CheckCircle,
    color: 'text-green-400'
  },
  { 
    title: 'Contest Rank',
    value: 'Top 10%',
    icon: Star,
    color: 'text-yellow-400'
  }
];

const leetcodeRatingData = [
  { month: 'Mar 2024', rating: 1600 },
  { month: 'Apr 2024', rating: 1650 },
  { month: 'May 2024', rating: 1700 },
  { month: 'Jun 2024', rating: 1750 },
  { month: 'Jul 2024', rating: 1720 },
  { month: 'Aug 2024', rating: 1823 },
];

const codeforcesRatingData = [
  { month: 'Mar 2024', rating: 1200 },
  { month: 'Apr 2024', rating: 1300 },
  { month: 'May 2024', rating: 1350 },
  { month: 'Jun 2024', rating: 1400 },
  { month: 'Jul 2024', rating: 1450 },
  { month: 'Aug 2024', rating: 1500 },
];

// Add new pie chart data for solved problems
const solvedProblemsPie = [
  { name: 'Easy', value: 180, color: '#4ade80' },
  { name: 'Medium', value: 420, color: '#fbbf24' },
  { name: 'Hard', value: 250, color: '#f7768e' },
];

const otherAchievements = [
  {
    title: 'Microsoft Azure AI Hackathon',
    description: 'Attained first rank in Microsoft Azure AI Hackathon.',
    date: '2025',
    image: '/msf.png'
  },
  {
    title: 'Hackvita 3.0 Hackathon',
    description: 'Attained second rank representing IIT Patna in Hackvita 3.0.',
    date: '2025',
    image: '/hackvita.png'
  },
  {
    title: 'Paper on UAV',
    description: 'OCUS: A Game-Theoretic Approach to Optimal UAV Coalitions ',
    date: '2025',
    image: '/OCUS.png'
  },
  {
    title: 'Meta Hacker Cup',
    description: 'Qualified till round 2, final rank of 3636.',
    date: '2024',
    image: '/meta.png'
  },
  {
    title: 'Amazon ML Summer School',
    description: 'Selected among top 3% (3,000 out of 100,000) in Amazon ML Summer School 2024.',
    date: '2024',
    image: '/amazon.png'
  },
  {
    title: 'Adobe Gensolve',
    description: 'Ranked among the top 5 percentile of 1,00,000+ students.',
    date: '2024',
    image: '/adobe.png'
  },
  {
    title: '3 Star on CodeChef',
    description: 'Achieved a top rating of 1715 (3 Star) on CodeChef.',
    date: '2024',
    image: '/codechef.png'
  },
  {
    title: 'JEE Advanced 2022',
    description: 'Secured a rank of 2539 out of 1,60,000 students all over India.',
    date: '2022',
    image: '/jee.png'
  },
  {
    title: 'JEE Mains 2022',
    description: 'Ranked in top 0.4% out of 10,00,000 students all over India.',
    date: '2022',
    image: '/jee.png'
  }
];

const Achievements = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-[#a9b1d6] mb-8">
        <span className="text-[#7aa2f7] font-mono">03.</span> Achievements
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Window Header */}
        <div className="h-10 flex items-center px-4 bg-[#24283b] border-b border-[#414868]">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#f7768e]" />
            <div className="h-3 w-3 rounded-full bg-[#e0af68]" />
            <div className="h-3 w-3 rounded-full bg-[#9ece6a]" />
          </div>
          <div className="text-xs text-center flex-1 text-gray-400 font-mono">
            achievements@iitpatna: ~/stats
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* LeetCode and Codeforces Cards */}
          <div className="flex flex-col gap-6 mb-6">
            <div className="bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden border border-[#414868] p-6 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-2 min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="w-7 h-7 rounded" />
                  <span className="text-[#f7c873] font-semibold text-lg">LeetCode</span>
                </div>
                <div className="flex flex-wrap gap-6 text-[#a9b1d6] text-sm">
                  <div>
                    <span className="block text-xs text-[#565f89]">Rating</span>
                    <span className="font-bold text-lg text-[#7aa2f7]">1,823</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#565f89]">Top Percentile</span>
                    <span className="font-bold text-lg text-[#9ece6a]">6.78%</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#565f89]">Problems Solved</span>
                    <span className="font-bold text-lg text-[#f7768e]">453</span>
                  </div>
                </div>
                <a
                  href="https://leetcode.com/u/akhandsinghjx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[#7aa2f7] hover:text-[#9ece6a] text-sm font-mono underline"
                >
                  View LeetCode Profile
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V17.25M17.25 6.75H6.75M17.25 6.75L6.75 17.25" />
                  </svg>
                </a>
              </div>
              <div className="flex-1 min-w-[250px]">
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={leetcodeRatingData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                    <XAxis dataKey="month" tick={{ fill: '#a9b1d6', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[1600, 1900]} hide />
                    <Tooltip contentStyle={{ background: '#24283b', border: 'none', color: '#a9b1d6' }} labelStyle={{ color: '#7aa2f7' }} />
                    <Line type="monotone" dataKey="rating" stroke="#e0af68" strokeWidth={2} dot={{ r: 4, fill: '#e0af68' }} activeDot={{ r: 6, fill: '#7aa2f7' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden border border-[#414868] p-6 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-2 min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <img src="/codeforces-small-logo.png" alt="Codeforces" className="w-7 h-7 rounded" />
                  <span className="text-[#00cccc] font-semibold text-lg">Codeforces</span>
                </div>
                <div className="flex flex-wrap gap-6 text-[#a9b1d6] text-sm">
                  <div>
                    <span className="block text-xs text-[#565f89]">Max Rating</span>
                    <span className="font-bold text-lg" style={{ color: '#00cccc' }}>1500</span>
                    <span className="ml-2 text-xs px-2 py-0.5 rounded bg-[#00cccc]/10 text-[#00cccc] font-mono">Specialist</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#565f89]">Problems Solved</span>
                    <span className="font-bold text-lg text-[#f7768e]">392</span>
                  </div>
                </div>
                <a
                  href="https://codeforces.com/profile/demitronization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[#00cccc] hover:text-[#7aa2f7] text-sm font-mono underline"
                >
                  View Codeforces Profile
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V17.25M17.25 6.75H6.75M17.25 6.75L6.75 17.25" />
                  </svg>
                </a>
              </div>
              <div className="flex-1 min-w-[250px]">
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={codeforcesRatingData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                    <XAxis dataKey="month" tick={{ fill: '#a9b1d6', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[1200, 1600]} hide />
                    <Tooltip contentStyle={{ background: '#24283b', border: 'none', color: '#a9b1d6' }} labelStyle={{ color: '#00cccc' }} />
                    <Line type="monotone" dataKey="rating" stroke="#00cccc" strokeWidth={2} dot={{ r: 4, fill: '#00cccc' }} activeDot={{ r: 6, fill: '#7aa2f7' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {/* Achievements Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pie Chart for Solved Problems */}
            <Card className="p-5 bg-[#24283b] border-[#414868] col-span-1 md:col-span-2 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Total Problems Solved: <span className="text-[#7aa2f7] font-bold">850+</span></h3>
              <div className="h-64 w-full flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={solvedProblemsPie}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}+`}
                    >
                      {solvedProblemsPie.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 mt-4">
                  {solvedProblemsPie.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-gray-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          {/* Other Achievements Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAchievements.map((ach, idx) => (
              <div key={idx} className="bg-[#24283b] border border-[#414868] rounded-lg shadow-lg overflow-hidden flex flex-col">
                <button
                  className="focus:outline-none"
                  onClick={() => setModalImage(ach.image)}
                  tabIndex={0}
                  aria-label={`View image for ${ach.title}`}
                >
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-200"
                  />
                </button>
                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs text-[#565f89] mb-1">{ach.date}</div>
                  <div className="font-semibold text-[#a9b1d6] mb-1">{ach.title}</div>
                  <div className="text-[#a9b1d6] text-sm flex-1">{ach.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal for image preview */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Achievement" className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border-4 border-[#414868]" />
        </div>
      )}
    </div>
  );
};

export default Achievements;
