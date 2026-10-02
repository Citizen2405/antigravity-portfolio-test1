import React, { useState } from 'react';
import { 
  Play, 
  RotateCw, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';

interface TestCase {
  id: string;
  name: string;
  module: string;
  duration: string;
  status: 'idle' | 'running' | 'passed';
  log: string;
}

export const TestPipelineVisualizer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'code'>('pipeline');
  const [executionTime, setExecutionTime] = useState<number>(1.88);

  const initialTests: TestCase[] = [
    {
      id: 'TC-01',
      name: 'Init Selenium WebDriver [Chrome / Grid]',
      module: 'iCargo.Core.DriverFactory',
      duration: '0.28s',
      status: 'passed',
      log: '[PASS] WebDriver initialized with headless capabilities.',
    },
    {
      id: 'TC-02',
      name: 'Auth Air France-KLM Cargo Portal Session',
      module: 'iCargo.Security.AuthTest',
      duration: '0.42s',
      status: 'passed',
      log: '[PASS] Token validation handshake successful (HTTP 200).',
    },
    {
      id: 'TC-03',
      name: 'Air Waybill (AWB) Booking Validation',
      module: 'iCargo.Operations.BookingSuite',
      duration: '0.51s',
      status: 'passed',
      log: '[PASS] Consignment dimensions & weight verified against schema.',
    },
    {
      id: 'TC-04',
      name: 'RapidBotz Robotic Workflow Integration',
      module: 'iCargo.Automation.RapidBotzRunner',
      duration: '0.39s',
      status: 'passed',
      log: '[PASS] Automated bot workflow executed without timeout.',
    },
    {
      id: 'TC-05',
      name: 'Assert Cargo Manifest Confirmation State',
      module: 'iCargo.Assertions.ManifestAssert',
      duration: '0.28s',
      status: 'passed',
      log: '[ASSERTION OK] Expected "CONFIRMED", Actual "CONFIRMED".',
    },
  ];

  const [tests, setTests] = useState<TestCase[]>(initialTests);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);

    // Reset tests to idle
    setTests((prev) =>
      prev.map((t) => ({ ...t, status: 'idle' }))
    );

    let current = 0;
    const interval = setInterval(() => {
      if (current < initialTests.length) {
        setTests((prev) =>
          prev.map((t, idx) => {
            if (idx === current) return { ...t, status: 'running' };
            if (idx < current) return { ...t, status: 'passed' };
            return { ...t, status: 'idle' };
          })
        );

        setTimeout(() => {
          setTests((prev) =>
            prev.map((t, idx) =>
              idx === current ? { ...t, status: 'passed' } : t
            )
          );
        }, 320);

        current++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setExecutionTime(Number((1.7 + Math.random() * 0.3).toFixed(2)));
      }
    }, 450);
  };

  return (
    <div className="w-full bg-slate-900/95 dark:bg-slate-900/90 text-slate-100 rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            pipeline://iCargo-AFKLM-Martinair.testng
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60 text-xs">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-2.5 py-1 rounded font-mono transition-colors ${
              activeTab === 'pipeline'
                ? 'bg-slate-700 text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded font-mono transition-colors ${
              activeTab === 'code'
                ? 'bg-slate-700 text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            TestNG Code
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'pipeline' ? (
        <div className="p-4 sm:p-5">
          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                BUILD #2405 PASSING
              </span>
              <span className="text-slate-400 hidden sm:inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Total Time: <strong className="text-slate-200 font-mono">{executionTime}s</strong>
              </span>
            </div>

            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-semibold text-xs transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-emerald-500/20"
            >
              {isRunning ? (
                <>
                  <RotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Executing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Automation Suite</span>
                </>
              )}
            </button>
          </div>

          {/* Test Steps List */}
          <div className="space-y-2 mb-4 font-mono text-xs">
            {tests.map((test, index) => {
              return (
                <div
                  key={test.id}
                  className={`flex items-center justify-between p-2.5 rounded-lg border transition-all duration-200 ${
                    test.status === 'passed'
                      ? 'bg-slate-950/60 border-emerald-500/20 text-slate-200'
                      : test.status === 'running'
                      ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 ring-1 ring-emerald-500/30'
                      : 'bg-slate-950/30 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    {test.status === 'passed' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    )}
                    {test.status === 'running' && (
                      <RotateCw className="w-4 h-4 text-emerald-400 animate-spin flex-shrink-0" />
                    )}
                    {test.status === 'idle' && (
                      <span className="w-4 h-4 rounded-full border border-slate-600 flex-shrink-0 flex items-center justify-center text-[10px] text-slate-500">
                        {index + 1}
                      </span>
                    )}

                    <div className="truncate">
                      <div className="font-semibold truncate text-slate-200">
                        {test.name}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {test.module}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] text-slate-400">
                      {test.duration}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                        test.status === 'passed'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : test.status === 'running'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {test.status === 'running' ? 'RUN' : test.status === 'passed' ? 'PASS' : 'QUEUED'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Micro Terminal Output */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-400">
            <div className="flex items-center gap-2 text-slate-500 mb-1.5 pb-1 border-b border-slate-900">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Console Log • TestNG Execution Harness</span>
            </div>
            <div className="space-y-0.5 text-slate-300">
              <p className="text-slate-500">
                $ mvn clean test -DsuiteXmlFile=testng-icargo.xml
              </p>
              <p className="text-emerald-400">
                [INFO] Tests run: 5, Failures: 0, Errors: 0, Skipped: 0
              </p>
              <p className="text-slate-400">
                [INFO] Target: Air France-KLM Martinair Cargo (iCargo Core)
              </p>
              <p className="text-slate-400">
                [INFO] Stack: Java • Selenium WebDriver • RapidBotz Workflow
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Code View */
        <div className="p-4 bg-slate-950 font-mono text-xs overflow-x-auto text-slate-300">
          <pre className="text-slate-300 leading-relaxed">
{`package com.afklm.cargo.automation;

import org.testng.Assert;
import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;

public class CargoBookingAutomationTest {

    @Test(priority = 1, description = "Air France-KLM Consignment Flow")
    public void testCargoBookingValidation() {
        // Selenium WebDriver + RapidBotz automation workflow
        driver.get("https://icargo.portal/booking");
        bookingPage.enterShipmentDetails("AWB-074-240589");
        
        // Execute automated validation routine
        rapidBotzClient.triggerWorkflow("BOOKING_RECONCILIATION");
        
        // Validate final state
        String status = bookingPage.getConfirmationStatus();
        Assert.assertEquals(status, "CONFIRMED", "Booking status mismatch");
    }
}`}
          </pre>
        </div>
      )}
    </div>
  );
};
