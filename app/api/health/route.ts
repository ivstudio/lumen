import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectDB();

    const isConnected = mongoose.connection.readyState === 1;

    return NextResponse.json({
      status: 'healthy',
      database: {
        connected: isConnected,
        name: mongoose.connection.name,
        host: mongoose.connection.host,
        models: Object.keys(mongoose.models),
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
