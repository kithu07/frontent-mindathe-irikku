"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Volume2, Flame, Zap, Clock, Settings, Home, TrendingUp, Mic, VolumeX, Film, Headphones, UserCheck } from "lucide-react"


export default function Dashboard() {
  const [micSensitivity, setMicSensitivity] = useState([75])
  const [isEnabled, setIsEnabled] = useState(true)
  const [selectedVoice, setSelectedVoice] = useState("strict-mom")
  const [isListening, setIsListening] = useState(false)

  const voicePersonalities = [
    { id: "strict-mom", name: "Strict Mom", description: "Classic shushing with authority" },
    { id: "angry-teacher", name: "Angry Teacher", description: "Academic discipline vibes" },
    { id: "mallu-aunty", name: "Mallu Aunty", description: "The legendary scolding master" },
    { id: "librarian", name: "Librarian", description: "Professional silence enforcer" },
    { id: "cinema-guard", name: "Cinema Guard", description: "Theater security energy" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-slide-in-left">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-custom">
              <Film className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">CinemaAzure Control Room</h1>
          </div>
          <Link href="/">
            <Button variant="outline" className="font-medium bg-transparent border-gray-600 text-white hover:bg-gray-800 hover-pulse animate-slide-in-right">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-slide-in-bottom">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, Movie Guardian! 🎬</h2>
          <p className="text-gray-400">Monitor your cinema peacekeeping and fine-tune your scolding settings</p>
        </div>

        {/* Live Microphone Meter */}
        <div className="mb-8">
          <Card className="border-gray-700 bg-gray-800 shadow-lg animate-slide-in-bottom">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <Mic className="h-5 w-5 text-red-500 animate-pulse-custom" />
                Live Microphone Input
              </CardTitle>
              <CardDescription className="text-gray-400">
                Real-time ambient sound monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-2">
                  {isListening ? "🎤 Listening..." : "🔇 Not Active"}
                </div>
                <div className="text-sm text-gray-400">
                  {isListening ? "Monitoring for loud talkers" : "Click 'Test Mic' to start"}
                </div>
              </div>
              
              {/* Audio Visualizer */}
              <div className="flex justify-center mb-4">
                <div className="audio-visualizer">
                  <div className="audio-bar audio-bar-1"></div>
                  <div className="audio-bar audio-bar-2"></div>
                  <div className="audio-bar audio-bar-3"></div>
                  <div className="audio-bar audio-bar-4"></div>
                  <div className="audio-bar audio-bar-5"></div>
                  <div className="audio-bar audio-bar-4"></div>
                  <div className="audio-bar audio-bar-3"></div>
                  <div className="audio-bar audio-bar-2"></div>
                  <div className="audio-bar audio-bar-1"></div>
                </div>
              </div>

              <Button
                onClick={() => setIsListening(!isListening)}
                className={`w-full ${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                <Mic className="mr-2 h-4 w-4" />
                {isListening ? 'Stop Listening' : 'Test Microphone'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-gray-700 bg-gray-800 shadow-lg animate-float stagger-1 hover-float">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Scoldings Today</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-custom">
                <Flame className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">23</div>
              <p className="text-xs text-gray-500 mt-1">Talkers put in their place! 🔥</p>
            </CardContent>
          </Card>

          <Card className="border-gray-700 bg-gray-800 shadow-lg animate-float stagger-2 hover-float">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Loudest Moment</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-custom">
                <Volume2 className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89 dB</div>
              <p className="text-xs text-gray-500 mt-1">Someone was really excited!</p>
            </CardContent>
          </Card>

          <Card className="border-gray-700 bg-gray-800 shadow-lg animate-float stagger-3 hover-float">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Peace Restored</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center animate-pulse-custom">
                <Zap className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">18</div>
              <p className="text-xs text-gray-500 mt-1">Silent movie moments! ⚡</p>
            </CardContent>
          </Card>

          <Card className="border-gray-700 bg-gray-800 shadow-lg animate-float stagger-4 hover-float">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Voice</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center animate-pulse-custom">
                <UserCheck className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white">Strict Mom</div>
              <p className="text-xs text-gray-500 mt-1">Classic authority figure</p>
            </CardContent>
          </Card>
        </div>


        {/* Controls Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-gray-700 bg-gray-800 shadow-lg hover-float">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <Settings className="h-5 w-5 text-gray-400 animate-rotate" />
                Sensitivity Settings
              </CardTitle>
              <CardDescription className="text-gray-400">
                How strict should CinemaAzure be?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Whisper 🤫</span>
                  <span>Roar 🦁</span>
                </div>
                <Slider
                  value={micSensitivity}
                  onValueChange={setMicSensitivity}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="text-center">
                  <Badge variant="secondary" className="text-lg px-4 py-2 animate-pulse-custom bg-gray-700 text-white">
                    {micSensitivity[0]}% Sensitivity
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-700 bg-gray-800 shadow-lg hover-float">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <VolumeX className="h-5 w-5 text-gray-400 animate-pulse-custom" />
                Scolding Status
              </CardTitle>
              <CardDescription className="text-gray-400">
                Enable or disable automatic scolding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="font-medium text-white">Auto Scolding</div>
                  <div className={`text-sm ${isEnabled ? "text-green-400" : "text-gray-500"}`}>
                    {isEnabled ? "🟢 Active and ready to scold" : "⚪ Disabled"}
                  </div>
                </div>
                <Switch checked={isEnabled} onCheckedChange={setIsEnabled} className="scale-125" />
              </div>

              {isEnabled && (
                <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 p-4 rounded-lg border border-red-700">
                  <div className="text-center text-red-300 font-medium">🎭 Ready to roast some talkers!</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
