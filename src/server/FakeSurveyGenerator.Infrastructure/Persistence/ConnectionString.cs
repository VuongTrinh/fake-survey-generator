﻿using System;
using FakeSurveyGenerator.Application.Common.Persistence;

namespace FakeSurveyGenerator.Infrastructure.Persistence
{
    public sealed class ConnectionString : IConnectionString
    {
        public string Value { get; }

        public ConnectionString(string connectionString)
        {
            Value = !string.IsNullOrWhiteSpace(connectionString) ? connectionString : throw new ArgumentNullException(nameof(connectionString));
        }
    }
}
