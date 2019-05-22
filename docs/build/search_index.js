var documenterSearchIndex = {"docs":
[{"location":"#MC-Hammer-v0r1-1","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"","category":"section"},{"location":"#Overview-1","page":"MC Hammer v0r1","title":"Overview","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"The MC in MC Hammer stands for Monte-Carlo. This tool is inspired by seminal tools such as Oracle Crystal Ball and Palisade @RISK for their ability to quickly build and analyze Monte-Carlo simulation models using Excel functions and automations. MC Hammer replicates their logic, functions and elemental tools in Julia, thus significantly reducing the time, lines of code, complexity and effort to perform advanced modeling and simulation.","category":"page"},{"location":"#Installing-MCHammer-1","page":"MC Hammer v0r1","title":"Installing MCHammer","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"Install the package as usual using Pkg.","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"    using Pkg\r\n    Pkg.(\"MCHammer\")","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"If you need to install direct, we recommend using ']' to go in the native Pkg manager.","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"    (v1.1) pkg> add https://github.com/etorkia/MCHammer.jl","category":"page"},{"location":"#Loading-MCHammer-1","page":"MC Hammer v0r1","title":"Loading MCHammer","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"To load the MCHammer package","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"using MCHammer","category":"page"},{"location":"#Getting-your-environment-setup-for-modeling-1","page":"MC Hammer v0r1","title":"Getting your environment setup for modeling","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"In order to build your first model, you will need to get a few more packages installed:","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"Distributions.jl : To build a simulation, you need distributions as inputs. Julia offers univariate and multivariate distributions covering most needs.","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"StatsBase.jl and Statistics.jl : These packages provide all the functions to analyze results and build models.","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"To load the support packages:","category":"page"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"  julia> using Distributions, Statistics, StatsBase, DataFrames","category":"page"},{"location":"#Tutorials-1","page":"MC Hammer v0r1","title":"Tutorials","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"Pages = [\r\n    \"tutorials/321.md\",\r\n    \"tutorials/DataAnalysis.md\",\r\n    \"tutorials/NPV_in_Julia.md\"\r\n    ]\r\nDepth = 2","category":"page"},{"location":"#Another-Section-1","page":"MC Hammer v0r1","title":"Another Section","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"Pages = [\r\n    \"sec2/page1.md\",\r\n    \"sec2/page2.md\",\r\n    \"sec2/page3.md\"\r\n    ]\r\nDepth = 2","category":"page"},{"location":"#Index-1","page":"MC Hammer v0r1","title":"Index","text":"","category":"section"},{"location":"#","page":"MC Hammer v0r1","title":"MC Hammer v0r1","text":"","category":"page"},{"location":"manual/charts/#Charting-Functions-1","page":"Charting Functions","title":"Charting Functions","text":"","category":"section"},{"location":"manual/charts/#Overview-1","page":"Charting Functions","title":"Overview","text":"","category":"section"},{"location":"manual/charts/#","page":"Charting Functions","title":"Charting Functions","text":"MCHammer offers the most important charts for building and analyzing Monte-Carlo Results. MCH_Charts contains standard simulation charts for sensitivity, density, trends (time series with confidence bands) for simulation arrays, vectors and dataframes.","category":"page"},{"location":"manual/charts/#Functions-1","page":"Charting Functions","title":"Functions","text":"","category":"section"},{"location":"manual/charts/#","page":"Charting Functions","title":"Charting Functions","text":"density_chrt\r\nhistogram_chrt\r\nsensitivity_chrt\r\ntrend_chrt","category":"page"},{"location":"manual/charts/#MCHammer.density_chrt","page":"Charting Functions","title":"MCHammer.density_chrt","text":"density_chrt(Data, x_label=\"Sim. Values\")\n\nData is your array, either simulated or historical. x_label [optional] allows you to customize your X axis label.\n\n\n\n\n\n","category":"function"},{"location":"manual/charts/#MCHammer.histogram_chrt","page":"Charting Functions","title":"MCHammer.histogram_chrt","text":"histogram_chrt(Data, x_label=\"Sim. Values\")\n\nData is your array, either simulated or historical. x_label [optional] allows you to customize your X axis label.\n\n\n\n\n\n","category":"function"},{"location":"manual/charts/#MCHammer.sensitivity_chrt","page":"Charting Functions","title":"MCHammer.sensitivity_chrt","text":"sensitivity_chrt(ArrayName, TargetCol, Chrt_Type=1)\n\nTargetCol: used to select the output against which the other variables are analyzed for influence.\n\nChrt_Type: allows to change the chart metric: Spearman (1), PPMC (2) and  Contribution to Variance % (3)\n\n\n\n\n\n","category":"function"},{"location":"manual/charts/#MCHammer.trend_chrt","page":"Charting Functions","title":"MCHammer.trend_chrt","text":"trend_chrt(SimTimeArray, PeriodRange, quantiles=[0.05,0.5,0.95])\n\ntrend_chrt allows the visualization of a simulated time series. These can be generated using the GBMM function.\n\nPeriodRange must constructed using the ***Dates*** package and use the following syntax :\n\n  dr = collect(Date(2019,1,01):Dates.Year(1):Date(2023,01,01))\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#Simulation-Modeling-Functions-1","page":"Simulation Modeling Functions","title":"Simulation Modeling Functions","text":"","category":"section"},{"location":"manual/functions/#Overview-1","page":"Simulation Modeling Functions","title":"Overview","text":"","category":"section"},{"location":"manual/functions/#","page":"Simulation Modeling Functions","title":"Simulation Modeling Functions","text":"Some of the most important features in a Monte-Carlo simulation package have to do with analyzing and applying correlation in models. MCHammer's correlation approach is based on \"Ronald L. Iman & W. J. Conover (1982) A distribution-free approach to inducing rank correlation among input variables, Communications in Statistics - Simulation and Computation\"","category":"page"},{"location":"manual/functions/#Functions-1","page":"Simulation Modeling Functions","title":"Functions","text":"","category":"section"},{"location":"manual/functions/#","page":"Simulation Modeling Functions","title":"Simulation Modeling Functions","text":"cormat\r\ncovmat\r\ncorvar\r\nGetCertainty\r\nfractiles\r\ncmd\r\ntruncate_digit","category":"page"},{"location":"manual/functions/#MCHammer.cormat","page":"Simulation Modeling Functions","title":"MCHammer.cormat","text":"cormat(ArrayName, RankOrder=1)\n\nCormat calculates a symetric correlation matrix using both PPMC and Rank Order. Rank Order is default because this is what it used in the Iman-Conover method for correlating of simulated variables.\n\nRankOrder = 1 calculates the Spearman rank order correlation used in MCHammer (this argument is optional and defaults to Spearman)\n\nRankOrder = 0 calculates the Pearson Product Moment Correlation\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#MCHammer.covmat","page":"Simulation Modeling Functions","title":"MCHammer.covmat","text":"covmat(ArrayName)\n\nCalculates the covariance matrix.\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#MCHammer.corvar","page":"Simulation Modeling Functions","title":"MCHammer.corvar","text":"corvar(ArrayName, n_trials, correl_matrix)\n\nThe corvar function correlates simulation inputs unsing the Iman Conover Method. Your array must contain >2 simulated inputs. Remember to hcat() your inputs into tables reflecting your input correlation matrices.\n\nn_trials: is the number of trials in the simulation. This must be consistent.\n\ncorrel_matrix: must be defined as a Square Positive Definite correlation matrix. This can be calculated from histroical data using cormat function.\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#MCHammer.GetCertainty","page":"Simulation Modeling Functions","title":"MCHammer.GetCertainty","text":"GetCertainty(ArrayName, x, AboveBelow=0)\n\nThis function returns the percentage of trials Above (1) or Below(0) a target value of x.\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#MCHammer.fractiles","page":"Simulation Modeling Functions","title":"MCHammer.fractiles","text":"fractiles(ArrayName, Increment=0.1)\n\nThe fractiles function calculates percentiles at equal increments. The default optional argument for Increments is 0.1 for deciles but can be set to anything such as 0.05 for quintiles or 0.01 for percentiles.\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#MCHammer.cmd","page":"Simulation Modeling Functions","title":"MCHammer.cmd","text":"cmd(x)\n\nShell /Dos Command wrapper to run batch and shell commands in script\n\n\n\n\n\n","category":"function"},{"location":"manual/functions/#MCHammer.truncate_digit","page":"Simulation Modeling Functions","title":"MCHammer.truncate_digit","text":"function  truncate_digit(num, digits=2)\n\nTruncation algorithim to remove decimals (ported by anonymous author from Maple) e.g.\n\n  0.066 = 0.06\n  0.063 = 0.06\n\n\n\n\n\n","category":"function"},{"location":"manual/time_series/#Time-Series-Simulation-1","page":"Time-Series Simulation","title":"Time-Series Simulation","text":"","category":"section"},{"location":"manual/time_series/#Overview-1","page":"Time-Series Simulation","title":"Overview","text":"","category":"section"},{"location":"manual/time_series/#","page":"Time-Series Simulation","title":"Time-Series Simulation","text":"mchtimeseries contains functions to create simulated times series with mchammer. Current implementation supports GBM only. Other methods should be added","category":"page"},{"location":"manual/time_series/#Functions-1","page":"Time-Series Simulation","title":"Functions","text":"","category":"section"},{"location":"manual/time_series/#","page":"Time-Series Simulation","title":"Time-Series Simulation","text":"GBMMult_Fit\r\nGBMM","category":"page"},{"location":"manual/time_series/#MCHammer.GBMMult_Fit","page":"Time-Series Simulation","title":"MCHammer.GBMMult_Fit","text":"GBMMult_Fit(HistoricalData, PeriodsToForecast)\n\nGBMMult_Fit uses a vector of historical data to calculate the log returns and use the mean and standard deviation to project a random walk. It the uses the last datapoint in the set as the starting point for the new forecast.\n\nHistoricalData: Vector containing historical data PeriodsToForecast: integer >1\n\n\n\n\n\n","category":"function"},{"location":"manual/time_series/#MCHammer.GBMM","page":"Time-Series Simulation","title":"MCHammer.GBMM","text":"GBMM(LastValue, ReturnsMean, ReturnsStd, PeriodsToForecast)\n\nGBMM produces a random wlak using the last data point and requires a mean and standard deviation to be provided.\n\nLastValue: The most recent data point on which to base your random walk. ReturnsMean and ReturnsStd : Historical Mean and Standard Deviation of Returns\n\nPeriodsToForecast is an integer >1\n\n\n\n\n\n","category":"function"},{"location":"tutorials/1_first_model/#Building-your-first-model-1","page":"Building your first model","title":"Building your first model","text":"","category":"section"},{"location":"tutorials/1_first_model/#Installing-MCHammer-1","page":"Building your first model","title":"Installing MCHammer","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"Install the package as usual using Pkg.","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"    using Pkg\n    Pkg.(\"MCHammer\")","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"If you need to install direct, we recommend using ']' to go in the native Pkg manager.","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"    (v1.1) pkg> add https://github.com/etorkia/MCHammer.jl","category":"page"},{"location":"tutorials/1_first_model/#Loading-MCHammer-1","page":"Building your first model","title":"Loading MCHammer","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"To load the MCHammer package","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"using MCHammer","category":"page"},{"location":"tutorials/1_first_model/#Getting-your-environment-setup-for-modeling-1","page":"Building your first model","title":"Getting your environment setup for modeling","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"In order to build your first model, you will need to get a few more packages installed:","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"Distributions.jl : To build a simulation, you need distributions as inputs. Julia offers univariate and multivariate distributions covering most needs.\nStatsBase.jl and Statistics.jl : These packages provide all the functions to analyze results and build models.","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"To load the support packages:","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"  julia> using Distributions, Statistics, StatsBase, DataFrames","category":"page"},{"location":"tutorials/1_first_model/#Building-a-simple-example-1","page":"Building your first model","title":"Building a simple example","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"EVERY MONTE CARLO MODEL HAS 3 COMPONENTS","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"Inputs: Ranges or Single Values\nA Model:  Set of mathematical relationships f(x)\nOutputs: The variable(s) of interest you want to analyze","category":"page"},{"location":"tutorials/1_first_model/#Main-Distributions-for-most-modeling-situations-1","page":"Building your first model","title":"Main Distributions for most modeling situations","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"Though the most used distributions are cite below, Julia's Distributions package has an impressive array of options. Please check out the complete library of distributions at Distributions.jl","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"Normal()\nLogNormal()\nTriangular()\nUniform()\nBeta\nExponential\nGamma\nWeibull\nPoisson\nBinomial\nBernoulli","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"In order to define a simulated input you need to use the rand function. By assigning a variable name, you can generate any simulated vector you want.","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"using Distributions\ninput_variable = rand(Normal(0,1),100)","category":"page"},{"location":"tutorials/1_first_model/#Creating-a-simple-model-1","page":"Building your first model","title":"Creating a simple model","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"A model is either a visual or mathematical representation of a situation or system. The easiest example of a model is","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"PROFIT = REVENUE - EXPENSES","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"Let's create a simple simulation model with 1000 trials with the following inputs:","category":"page"},{"location":"tutorials/1_first_model/#Building-a-Sample-Model-1","page":"Building your first model","title":"Building a Sample Model","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"using Distributions, StatsBase, DataFrames, MCHammer\nn_trials = 1000\nRevenue = rand(TriangularDist(2500000,4000000,3000000), n_trials)\nExpenses = rand(TriangularDist(1400000,3000000,2000000), n_trials)\n\n# The Model\nProfit = Revenue - Expenses\n\n#Trial Results : the Profit vector (OUTPUT)\nProfit","category":"page"},{"location":"tutorials/1_first_model/#Analyzing-the-results-in-Julia-1","page":"Building your first model","title":"Analyzing the results in Julia","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"using Distributions, StatsBase, DataFrames, MCHammer #hide\nn_trials = 1000 #hide\nRevenue = rand(TriangularDist(2500000,4000000,3000000), n_trials) #hide\nExpenses = rand(TriangularDist(1400000,3000000,2000000), n_trials) #hide\nProfit = Revenue - Expenses #hide\n\n# `fractiles()` allows you to get the percentiles at various increments.\n\nfractiles(Profit)","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"using Distributions, StatsBase, DataFrames, MCHammer #hide\nn_trials = 1000 #hide\nRevenue = rand(TriangularDist(2500000,4000000,3000000), n_trials) #hide\nExpenses = rand(TriangularDist(1400000,3000000,2000000), n_trials)#hide\nProfit = Revenue - Expenses #hide\ndensity_chrt(Profit)","category":"page"},{"location":"tutorials/1_first_model/#Sensitivity-Analysis-1","page":"Building your first model","title":"Sensitivity Analysis","text":"","category":"section"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"First we need to create a sensitivity table with hcat() using both the input and output vectors.","category":"page"},{"location":"tutorials/1_first_model/#","page":"Building your first model","title":"Building your first model","text":"using Distributions, StatsBase, DataFrames, MCHammer #hide\nn_trials = 1000 #hide\nRevenue = rand(TriangularDist(2500000,4000000,3000000), n_trials) #hide\nExpenses = rand(TriangularDist(1400000,3000000,2000000), n_trials)#hide\nProfit = Revenue - Expenses #hide\n\n#Construct the sensitivity input table by consolidating all the relevant\n#inputs and outputs.\n\ns_table = hcat(Profit, Revenue, Expenses)\n\n#We then need to convert to a DataFrame and add names\n\ns_table = DataFrame(s_table)\nnames!(s_table, [:Profit, :Revenue, :Expenses])\n\n#To produce a sensitivity tornado chart, we need to select the output against\n#which the inputs are measured for effect.\n\nsensitivity_chrt(s_table, 1, 3)","category":"page"},{"location":"tutorials/321/#Correlating-Variables-1","page":"Correlating Variables","title":"Correlating Variables","text":"","category":"section"},{"location":"tutorials/DataAnalysis/#Analyzing-Data-1","page":"Analyzing Data","title":"Analyzing Data","text":"","category":"section"},{"location":"tutorials/NPV_in_Julia/#Simulated-NPV-with-Time-Series-1","page":"Simulated NPV with Time-Series","title":"Simulated NPV with Time-Series","text":"","category":"section"}]
}
